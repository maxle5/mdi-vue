
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGooglePlus from "../../src/components/MdiGooglePlus.vue";

test("MdiGooglePlus snapshot", () => {
  const wrapper = mount(MdiGooglePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
