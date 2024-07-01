
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonDeadOutline from "../../src/components/MdiEmoticonDeadOutline.vue";

test("MdiEmoticonDeadOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonDeadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
