
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveSyncOutline from "../../src/components/MdiArchiveSyncOutline.vue";

test("MdiArchiveSyncOutline snapshot", () => {
  const wrapper = mount(MdiArchiveSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
