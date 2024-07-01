
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleLens from "../../src/components/MdiGoogleLens.vue";

test("MdiGoogleLens snapshot", () => {
  const wrapper = mount(MdiGoogleLens, {});
  expect(wrapper.html()).toMatchSnapshot();
});
