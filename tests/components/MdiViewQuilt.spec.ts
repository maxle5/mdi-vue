
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewQuilt from "../../src/components/MdiViewQuilt.vue";

test("MdiViewQuilt snapshot", () => {
  const wrapper = mount(MdiViewQuilt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
