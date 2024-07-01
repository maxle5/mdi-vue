
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonCryOutline from "../../src/components/MdiEmoticonCryOutline.vue";

test("MdiEmoticonCryOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonCryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
