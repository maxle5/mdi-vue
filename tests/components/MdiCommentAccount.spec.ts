
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentAccount from "../../src/components/MdiCommentAccount.vue";

test("MdiCommentAccount snapshot", () => {
  const wrapper = mount(MdiCommentAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
