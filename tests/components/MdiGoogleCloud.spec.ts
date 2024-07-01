
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleCloud from "../../src/components/MdiGoogleCloud.vue";

test("MdiGoogleCloud snapshot", () => {
  const wrapper = mount(MdiGoogleCloud, {});
  expect(wrapper.html()).toMatchSnapshot();
});
