
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReact from "../../src/components/MdiReact.vue";

test("MdiReact snapshot", () => {
  const wrapper = mount(MdiReact, {});
  expect(wrapper.html()).toMatchSnapshot();
});
