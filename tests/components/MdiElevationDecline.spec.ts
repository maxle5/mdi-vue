
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElevationDecline from "../../src/components/MdiElevationDecline.vue";

test("MdiElevationDecline snapshot", () => {
  const wrapper = mount(MdiElevationDecline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
