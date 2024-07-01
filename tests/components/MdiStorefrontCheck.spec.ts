
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontCheck from "../../src/components/MdiStorefrontCheck.vue";

test("MdiStorefrontCheck snapshot", () => {
  const wrapper = mount(MdiStorefrontCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
