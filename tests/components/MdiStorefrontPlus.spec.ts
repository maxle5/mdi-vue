
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontPlus from "../../src/components/MdiStorefrontPlus.vue";

test("MdiStorefrontPlus snapshot", () => {
  const wrapper = mount(MdiStorefrontPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
