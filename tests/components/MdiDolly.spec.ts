
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDolly from "../../src/components/MdiDolly.vue";

test("MdiDolly snapshot", () => {
  const wrapper = mount(MdiDolly, {});
  expect(wrapper.html()).toMatchSnapshot();
});
