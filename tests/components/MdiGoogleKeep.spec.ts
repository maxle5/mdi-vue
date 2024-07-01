
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleKeep from "../../src/components/MdiGoogleKeep.vue";

test("MdiGoogleKeep snapshot", () => {
  const wrapper = mount(MdiGoogleKeep, {});
  expect(wrapper.html()).toMatchSnapshot();
});
