
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonAngryOutline from "../../src/components/MdiEmoticonAngryOutline.vue";

test("MdiEmoticonAngryOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonAngryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
