
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleCirclesGroup from "../../src/components/MdiGoogleCirclesGroup.vue";

test("MdiGoogleCirclesGroup snapshot", () => {
  const wrapper = mount(MdiGoogleCirclesGroup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
