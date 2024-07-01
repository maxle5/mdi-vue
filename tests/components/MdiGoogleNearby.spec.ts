
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleNearby from "../../src/components/MdiGoogleNearby.vue";

test("MdiGoogleNearby snapshot", () => {
  const wrapper = mount(MdiGoogleNearby, {});
  expect(wrapper.html()).toMatchSnapshot();
});
