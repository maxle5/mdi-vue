
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTractorVariant from "../../src/components/MdiTractorVariant.vue";

test("MdiTractorVariant snapshot", () => {
  const wrapper = mount(MdiTractorVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
