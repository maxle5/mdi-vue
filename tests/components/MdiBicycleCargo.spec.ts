
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBicycleCargo from "../../src/components/MdiBicycleCargo.vue";

test("MdiBicycleCargo snapshot", () => {
  const wrapper = mount(MdiBicycleCargo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
