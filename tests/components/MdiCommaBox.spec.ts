
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommaBox from "../../src/components/MdiCommaBox.vue";

test("MdiCommaBox snapshot", () => {
  const wrapper = mount(MdiCommaBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
