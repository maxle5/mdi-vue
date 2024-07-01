
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonCoolOutline from "../../src/components/MdiEmoticonCoolOutline.vue";

test("MdiEmoticonCoolOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonCoolOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
