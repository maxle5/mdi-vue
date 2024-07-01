
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleCircles from "../../src/components/MdiGoogleCircles.vue";

test("MdiGoogleCircles snapshot", () => {
  const wrapper = mount(MdiGoogleCircles, {});
  expect(wrapper.html()).toMatchSnapshot();
});
