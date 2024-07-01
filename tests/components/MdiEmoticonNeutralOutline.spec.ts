
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonNeutralOutline from "../../src/components/MdiEmoticonNeutralOutline.vue";

test("MdiEmoticonNeutralOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonNeutralOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
