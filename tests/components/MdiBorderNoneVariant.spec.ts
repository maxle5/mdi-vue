
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderNoneVariant from "../../src/components/MdiBorderNoneVariant.vue";

test("MdiBorderNoneVariant snapshot", () => {
  const wrapper = mount(MdiBorderNoneVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
