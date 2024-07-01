
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCityVariant from "../../src/components/MdiCityVariant.vue";

test("MdiCityVariant snapshot", () => {
  const wrapper = mount(MdiCityVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
