
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleEarth from "../../src/components/MdiGoogleEarth.vue";

test("MdiGoogleEarth snapshot", () => {
  const wrapper = mount(MdiGoogleEarth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
