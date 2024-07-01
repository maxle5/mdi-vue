
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSilverwareClean from "../../src/components/MdiSilverwareClean.vue";

test("MdiSilverwareClean snapshot", () => {
  const wrapper = mount(MdiSilverwareClean, {});
  expect(wrapper.html()).toMatchSnapshot();
});
