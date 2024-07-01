
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleHangouts from "../../src/components/MdiGoogleHangouts.vue";

test("MdiGoogleHangouts snapshot", () => {
  const wrapper = mount(MdiGoogleHangouts, {});
  expect(wrapper.html()).toMatchSnapshot();
});
