
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandHeartOutline from "../../src/components/MdiHandHeartOutline.vue";

test("MdiHandHeartOutline snapshot", () => {
  const wrapper = mount(MdiHandHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
