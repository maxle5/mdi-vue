
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveCheck from "../../src/components/MdiArchiveCheck.vue";

test("MdiArchiveCheck snapshot", () => {
  const wrapper = mount(MdiArchiveCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
