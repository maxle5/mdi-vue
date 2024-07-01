
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUfo from "../../src/components/MdiUfo.vue";

test("MdiUfo snapshot", () => {
  const wrapper = mount(MdiUfo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
