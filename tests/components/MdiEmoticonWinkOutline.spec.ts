
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonWinkOutline from "../../src/components/MdiEmoticonWinkOutline.vue";

test("MdiEmoticonWinkOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonWinkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
