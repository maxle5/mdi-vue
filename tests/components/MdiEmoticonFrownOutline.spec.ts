
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonFrownOutline from "../../src/components/MdiEmoticonFrownOutline.vue";

test("MdiEmoticonFrownOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonFrownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
