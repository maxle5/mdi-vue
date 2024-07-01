
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonHappyOutline from "../../src/components/MdiEmoticonHappyOutline.vue";

test("MdiEmoticonHappyOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonHappyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
