
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonFrown from "../../src/components/MdiEmoticonFrown.vue";

test("MdiEmoticonFrown snapshot", () => {
  const wrapper = mount(MdiEmoticonFrown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
