
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayBox from "../../src/components/MdiPlayBox.vue";

test("MdiPlayBox snapshot", () => {
  const wrapper = mount(MdiPlayBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
