
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonTongueOutline from "../../src/components/MdiEmoticonTongueOutline.vue";

test("MdiEmoticonTongueOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonTongueOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
