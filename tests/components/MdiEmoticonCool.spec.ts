
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonCool from "../../src/components/MdiEmoticonCool.vue";

test("MdiEmoticonCool snapshot", () => {
  const wrapper = mount(MdiEmoticonCool, {});
  expect(wrapper.html()).toMatchSnapshot();
});
