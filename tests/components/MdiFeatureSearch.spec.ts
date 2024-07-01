
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFeatureSearch from "../../src/components/MdiFeatureSearch.vue";

test("MdiFeatureSearch snapshot", () => {
  const wrapper = mount(MdiFeatureSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
