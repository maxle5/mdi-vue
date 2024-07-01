
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationOffOutline from "../../src/components/MdiInformationOffOutline.vue";

test("MdiInformationOffOutline snapshot", () => {
  const wrapper = mount(MdiInformationOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
