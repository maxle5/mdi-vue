
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoInputComponent from "../../src/components/MdiVideoInputComponent.vue";

test("MdiVideoInputComponent snapshot", () => {
  const wrapper = mount(MdiVideoInputComponent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
