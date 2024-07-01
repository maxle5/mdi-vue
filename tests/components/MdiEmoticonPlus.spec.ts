
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonPlus from "../../src/components/MdiEmoticonPlus.vue";

test("MdiEmoticonPlus snapshot", () => {
  const wrapper = mount(MdiEmoticonPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
