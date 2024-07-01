
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartFlash from "../../src/components/MdiHeartFlash.vue";

test("MdiHeartFlash snapshot", () => {
  const wrapper = mount(MdiHeartFlash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
