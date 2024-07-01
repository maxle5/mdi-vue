
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticon from "../../src/components/MdiEmoticon.vue";

test("MdiEmoticon snapshot", () => {
  const wrapper = mount(MdiEmoticon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
