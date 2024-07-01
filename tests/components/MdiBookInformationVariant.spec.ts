
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookInformationVariant from "../../src/components/MdiBookInformationVariant.vue";

test("MdiBookInformationVariant snapshot", () => {
  const wrapper = mount(MdiBookInformationVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
