
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBalcony from "../../src/components/MdiBalcony.vue";

test("MdiBalcony snapshot", () => {
  const wrapper = mount(MdiBalcony, {});
  expect(wrapper.html()).toMatchSnapshot();
});
