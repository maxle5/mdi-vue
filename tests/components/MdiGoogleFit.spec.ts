
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleFit from "../../src/components/MdiGoogleFit.vue";

test("MdiGoogleFit snapshot", () => {
  const wrapper = mount(MdiGoogleFit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
