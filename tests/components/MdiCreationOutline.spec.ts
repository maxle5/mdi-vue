
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreationOutline from "../../src/components/MdiCreationOutline.vue";

test("MdiCreationOutline snapshot", () => {
  const wrapper = mount(MdiCreationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
