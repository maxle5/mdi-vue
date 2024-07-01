
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationBoxOutline from "../../src/components/MdiInformationBoxOutline.vue";

test("MdiInformationBoxOutline snapshot", () => {
  const wrapper = mount(MdiInformationBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
