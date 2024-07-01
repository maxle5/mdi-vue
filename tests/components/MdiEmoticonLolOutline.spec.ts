
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonLolOutline from "../../src/components/MdiEmoticonLolOutline.vue";

test("MdiEmoticonLolOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonLolOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
