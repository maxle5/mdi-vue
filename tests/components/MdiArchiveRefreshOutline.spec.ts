
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveRefreshOutline from "../../src/components/MdiArchiveRefreshOutline.vue";

test("MdiArchiveRefreshOutline snapshot", () => {
  const wrapper = mount(MdiArchiveRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
