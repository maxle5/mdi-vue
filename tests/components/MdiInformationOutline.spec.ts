
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationOutline from "../../src/components/MdiInformationOutline.vue";

test("MdiInformationOutline snapshot", () => {
  const wrapper = mount(MdiInformationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
