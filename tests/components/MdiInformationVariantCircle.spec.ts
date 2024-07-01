
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationVariantCircle from "../../src/components/MdiInformationVariantCircle.vue";

test("MdiInformationVariantCircle snapshot", () => {
  const wrapper = mount(MdiInformationVariantCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
