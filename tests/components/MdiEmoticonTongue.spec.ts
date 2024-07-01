
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonTongue from "../../src/components/MdiEmoticonTongue.vue";

test("MdiEmoticonTongue snapshot", () => {
  const wrapper = mount(MdiEmoticonTongue, {});
  expect(wrapper.html()).toMatchSnapshot();
});
